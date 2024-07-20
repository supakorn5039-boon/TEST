import React, { useState } from "react";

type StudentRegisterProps = {
  name: string;
  school: string;
  studentId: string;
  studentCard: File | null;
  cardExpiry: string;
  email: string;
  birthdate: string;
  phone: string;
};

const StudentRegistration: React.FC = () => {
  const [register, setRegister] = useState<StudentRegisterProps>({
    name: "",
    school: "",
    studentId: "",
    studentCard: null,
    cardExpiry: "",
    email: "",
    birthdate: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<StudentRegisterProps>>({});

  const validate = () => {
    const newErrors: Partial<StudentRegisterProps> = {};
    if (!register.email.includes("@") || !register.email.includes(".com")) {
      newErrors.email = "Email must include '@' and '.com'";
    }
    if (!register.studentId || register.studentId.length < 5) {
      newErrors.studentId = "Student ID must be at least 5 characters";
    }
    return newErrors;
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      console.log(register);
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setRegister((prev) => ({
        ...prev,
        [name]: files ? files[0] : null,
      }));
    } else {
      setRegister((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          สมัครสมาชิกนักเรียน/นักศึกษา
        </h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-gray-700 mb-1">
              ชื่อ-นามสกุล:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={register.name}
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="school" className="block text-gray-700 mb-1">
              ชื่อสถานศึกษา:
            </label>
            <input
              type="text"
              id="school"
              name="school"
              value={register.school}
              placeholder="Enter school name"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
              required
            />
            {errors.school && (
              <p className="text-red-500 text-sm mt-1">{errors.school}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="student-id" className="block text-gray-700 mb-1">
              รหัสประจําตัวนักเรียน/นักศึกษา:
            </label>
            <input
              type="text"
              id="student-id"
              name="studentId"
              value={register.studentId}
              placeholder="Enter student ID"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
              required
            />
            {errors.studentId && (
              <p className="text-red-500 text-sm mt-1">{errors.studentId}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="student-card" className="block text-gray-700 mb-1">
              แนบรูปภาพบัตรนักศึกษา:
            </label>
            <input
              type="file"
              id="student-card"
              name="studentCard"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="card-expiry" className="block text-gray-700 mb-1">
              วันหมดอายุของบัตร:
            </label>
            <input
              type="date"
              id="card-expiry"
              name="cardExpiry"
              value={register.cardExpiry}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              อีเมล์:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={register.email}
              placeholder="Enter your Email"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="birthdate" className="block text-gray-700 mb-1">
              วันเกิด:
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={register.birthdate}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="block text-gray-700 mb-1">
              หมายเลขโทรศัพท์:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={register.phone}
              placeholder="Enter your Phone Number"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              type="submit"
            >
              สมัครสมาชิก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;
