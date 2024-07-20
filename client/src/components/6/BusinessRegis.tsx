import React, { useState } from "react";

type BusinessRegisterProps = {
  businessName: string;
  companyName: string;
  companyId: string;
  companyDoc: File | null;
  email: string;
  phone: string;
};

const BusinessRegistration: React.FC = () => {
  const [register, setRegister] = useState<BusinessRegisterProps>({
    businessName: "",
    companyName: "",
    companyId: "",
    companyDoc: null,
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<BusinessRegisterProps>>({});

  const validate = () => {
    const newErrors: Partial<BusinessRegisterProps> = {};
    if (!register.email.includes("@") || !register.email.includes(".com")) {
      newErrors.email = "Email must include '@' and '.com'";
    }
    if (register.businessName.length < 3) {
      newErrors.businessName = "Business name must be at least 3 characters";
    }
    if (register.companyId.length < 5) {
      newErrors.companyId = "Company ID must be at least 5 characters";
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
          สมัครสมาชิกธุรกิจ
        </h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="business-name" className="block text-gray-700 mb-1">
              ชื่อผู้ประกอบการ:
            </label>
            <input
              type="text"
              id="business-name"
              name="businessName"
              value={register.businessName}
              placeholder="Enter business owner name"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
              required
            />
            {errors.businessName && (
              <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="company-name" className="block text-gray-700 mb-1">
              ชื่อสถานประกอบการ:
            </label>
            <input
              type="text"
              id="company-name"
              name="companyName"
              value={register.companyName}
              placeholder="Enter company name"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
              required
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="company-id" className="block text-gray-700 mb-1">
              เลขทะเบียนนิติบุคคล:
            </label>
            <input
              type="text"
              id="company-id"
              name="companyId"
              value={register.companyId}
              placeholder="Enter company ID"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
              required
            />
            {errors.companyId && (
              <p className="text-red-500 text-sm mt-1">{errors.companyId}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="company-doc" className="block text-gray-700 mb-1">
              แนบเอกสารนิติบุคคล:
            </label>
            <input
              type="file"
              id="company-doc"
              name="companyDoc"
              accept="application/pdf,application/msword"
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

export default BusinessRegistration;
