"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import LoadingPage from "@/app/loading";
import useAxiosSecure from "@/app/components/axios/axiosSecure";
import { TUser } from "@/app/types/user.type";
import { toast } from "sonner";

const ManageUsers = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [designation, setDesignation] = useState<string>("");
  const [socialLinks, setSocialLinks] = useState({
    linkedin: "",
    twitter: "",
    facebook: "",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosSecure.get("/allusers");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [axiosSecure]);

  const handlePromote = async (userId: string, role: string) => {
    if (role === "instructor") {
      // Open modal for collecting instructor-specific info
      setSelectedUserId(userId);
      setIsModalOpen(true);
    } else {
      try {
        const response = await axiosSecure.patch(`/admin/users/role/${userId}`, { role });
        Swal.fire({
          icon: "success",
          title: `User role updated to ${role} successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        setUsers((prev) =>
          prev.map((user: TUser) => (user._id === userId ? { ...user, role } : user))
        );
      } catch (error) {
        console.error("Error updating role:", error);
        Swal.fire("Error", "Failed to update user role", "error");
      }
    }
  };

  const handlePromoteInstructor = async () => {
    if (!selectedUserId) return;
    try {
      const response = await axiosSecure.patch(`/admin/users/role/${selectedUserId}`, {
        role: "instructor",
        designation,
        socialLinks,
      });

      Swal.fire({
        icon: "success",
        title: `User promoted to Instructor successfully`,
        showConfirmButton: false,
        timer: 1500,
      });

      setUsers((prev) =>
        prev.map((user: TUser) =>
          user._id === selectedUserId
            ? { ...user, role: "instructor", designation, socialLinks }
            : user
        )
      );
      setIsModalOpen(false); // Close the modal
    } catch (error) {
      console.error("Error promoting instructor:", error);
      Swal.fire("Error", "Failed to promote user to instructor", "error");
    }
  };

  const handleDelete = async (userId: string) => {
    try {
      const response = await axiosSecure.delete(`/users/${userId}`);
      Swal.fire({
        icon: "success",
        title: "User deleted successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.info("Only Superadmin can delete this");
    }
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="container mx-auto py-8">
      <h3 className="text-2xl font-semibold mb-6 text-center">Manage Users</h3>

      {/* Make table scrollable on smaller screens */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-2 sm:px-4 py-2 border">S.No</th>
              <th className="px-2 sm:px-4 py-2 border">Name</th>
              <th className="px-2 sm:px-4 py-2 border">Email</th>
              <th className="px-2 sm:px-4 py-2 border">Role</th>
              <th className="px-2 sm:px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="px-2 sm:px-4 py-2 border text-sm">{index + 1}</td>
                <td className="px-2 sm:px-4 py-2 border text-sm">{user.name}</td>
                <td className="px-2 sm:px-4 py-2 border text-sm">{user.email}</td>
                <td className="px-2 sm:px-4 py-2 border text-sm">{user.role}</td>
                <td className="px-2 sm:px-4 py-2 border">
                  <button
                    className="bg-green-500 text-white px-2 sm:px-4 py-1 rounded w-full sm:w-auto block sm:inline mb-2 sm:mb-0 sm:mr-2"
                    onClick={() => handlePromote(user._id, "instructor")}
                  >
                    Promote to Instructor
                  </button>
                  <button
                    className="bg-blue-500 text-white px-2 sm:px-4 py-1 rounded w-full sm:w-auto block sm:inline mb-2 sm:mb-0 sm:mr-2"
                    onClick={() => handlePromote(user._id, "admin")}
                  >
                    Promote to Admin
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 sm:px-4 py-1 rounded w-full sm:w-auto block sm:inline mt-1"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Instructor Promotion */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Promote to Instructor</h2>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Designation</label>
              <input
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter designation"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Social Links</label>
              <input
                type="text"
                value={socialLinks.linkedin}
                onChange={(e) =>
                  setSocialLinks((prev) => ({ ...prev, linkedin: e.target.value }))
                }
                className="w-full px-3 py-2 border rounded"
                placeholder="LinkedIn URL"
              />
              <input
                type="text"
                value={socialLinks.twitter}
                onChange={(e) =>
                  setSocialLinks((prev) => ({ ...prev, twitter: e.target.value }))
                }
                className="w-full px-3 py-2 border rounded mt-2"
                placeholder="Twitter URL"
              />
              <input
                type="text"
                value={socialLinks.facebook}
                onChange={(e) =>
                  setSocialLinks((prev) => ({ ...prev, facebook: e.target.value }))
                }
                className="w-full px-3 py-2 border rounded mt-2"
                placeholder="Facebook URL"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handlePromoteInstructor}
              >
                Promote
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
