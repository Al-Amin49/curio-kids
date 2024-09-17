# Curio Kids - Online Learning System

**Description**: A comprehensive online learning platform built with the MERN stack, featuring user authentication, dynamic course management, and an interactive dashboard for an enhanced learning experience.

**Live Site:** https://curio-kids-eta.vercel.app


### Code Link
- Client side: https://github.com/Al-Amin49/curio-kids

- Server side: https://github.com/Al-Amin49/curio-kids-server

## Key Features
- **User Authentication**: 
  - Secure login and registration with role-based access (Student, Instructor, Admin).

- **Role Management**:
  - **Student**: Browse, filter, search courses, select and enroll in courses, pay via Stripe.
  - **Instructor**: Add, manage courses, request approval from Admin.
  - **Admin**: Approve/reject courses, manage users, promote/demote users (Instructor/Admin).

- **Course Management**:
  - **Students**: Filter, search, select courses, enroll with Stripe payments.
  - **Instructors**: Add and manage personal courses.
  - **Admin**: Approve/reject courses, manage all courses and enrollments.

- **Admin Dashboard**: 
  - Full control over course management (approve, reject) and user management (promote, demote).

- **Instructor Dashboard**: 
  - Add and manage own courses, track approval status.

- **Student Dashboard**: 
  - Search, filter, select, and enroll in courses.
  - Pay securely via Stripe and manage enrolled courses.

- **User Management**: 
  - Admin can promote/demote users (Student, Instructor, Admin).

- **Course Search and Filtering**: 
  - Filter courses by age, price, and search term to quickly find relevant courses.

- **Responsive Design**: 
  - Fully responsive design across mobile, tablet, and desktop.

- **Payment Integration**: 
  - Secure payments using Stripe for course enrollment.

- **Framer Motion Animations**: 
  - Smooth animations for dashboard views, course cards, search results, and filter interactions for a dynamic user experience.


### Installation and Usage
1. Clone the repository
```bash
git clone https://github.com/Al-Amin49/curio-kids

```
2. Install Dependencies
```bash
cd curio-kids
npm install

```
3. Run the server
```
npm run dev
```

## Technologies Used
- **Frontend**: Next.js, React, Tailwind, Framer Motion
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Future Improvements
- **Payment Integration**: Add Stripe payment system for handling course payments.
- **Enhanced Dynamics**: Make the website more dynamic with interactive features and real-time updates.
