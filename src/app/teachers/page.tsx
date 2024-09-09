import Image from "next/image";
import Cover from "../components/Cover";
import banner from "@/assets/teachers/page-banner-5.jpg";
import Container from "../components/UI/Container";

const TeachersPage = async () => {
    const res = await fetch(`http://localhost:8000/teachers`, {
        cache: "no-store",
    });
    const teachers = await res.json();
    console.log('teachers', teachers);

    return (
        <div>
            <Cover banner={banner} title="Teachers" subTitle="Meet Our Dedicated Teachers" />

            <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 lg:mx-0 my-20">
                {teachers.map((teacher) => (
                    <div key={teacher._id} className="flex flex-col md:flex-row bg-white shadow-lg overflow-hidden">
                        {/* Left Side: Image */}
                        <div className="md:w-1/3 ">
                            <Image
                                src={teacher.image}
                                alt={`${teacher.name}`}
                                width={200}
                                height={200}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Right Side: Content */}
                        <div className="md:w-2/3 p-4 flex flex-col justify-between border border-black ">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{teacher.name}</h3>
                                <p className="text-gray-600 mb-2">{teacher.designation}</p>

                                <div className="text-gray-600">
                                    <p className="font-semibold mb-1">Classes Taken: {teacher.totalClassesTaken}</p>
                                    <p className="mb-2">
                                        <span className="font-semibold">Classes:</span> {teacher.classes.join(", ")}
                                    </p>
                                </div>
                            </div>

                            {/* See Details Button */}
                            <div className="mt-4">
                                <button className=" btn btn-md rounded px-4 py-2">
                                    See Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </Container>
        </div>
    );
};

export default TeachersPage;
