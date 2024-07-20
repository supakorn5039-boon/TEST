import React, { useState } from "react";

type RegisterProps = {
  name: string;
  idCard: string;
  email: string;
  birthdate: string;
  phone: string;
};

const MemberRegistration: React.FC = () => {
  const [register, setRegister] = useState<RegisterProps>({
    name: "",
    idCard: "",
    email: "",
    birthdate: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<RegisterProps>>({});

  const validate = () => {
    const newErrors: Partial<RegisterProps> = {};
    if (!register.email.includes("@") || !register.email.includes(".com")) {
      newErrors.email = "Email must include '@' and '.com'";
    }
    if (register.name.length < 8) {
      newErrors.name = "Name must be more than 8 characters";
    }
    if (register.idCard.length !== 13) {
      newErrors.idCard = "ID card number must be 13 digits";
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
    const { name, value } = e.target;
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          สมัครสมาชิกบุคคลทั่วไป
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
              placeholder="Enter your Name"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="id-card" className="block text-gray-700 mb-1">
              รหัสบัตรประชาชน:
            </label>
            <input
              type="text"
              id="id-card"
              name="idCard"
              value={register.idCard}
              placeholder="Enter your ID Card Number"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
              required
            />
            {errors.idCard && (
              <p className="text-red-500 text-sm mt-1">{errors.idCard}</p>
            )}
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

export default MemberRegistration;
