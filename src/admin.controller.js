import { Admin } from "./admin.modal.js";



const adminRegister = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if admin already exists
  const existingAdmin = await Admin.findOne({ email });
  if (existingAdmin) {
    throw new AlreadyExist("Admin already exist", "existingAdmin method");
  }

  // Create new admin (Password will be hashed automatically)
  const newAdmin = await Admin.create({ name, email, password });

  res.status(201).json({
    message: "Admin created successfully",
    newAdmin,
  });
};

const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin) {
    throw new NotFoundError(
      "admin with this email not found",
      "adminLogin method"
    );
  }

  // Generate JWT Token
  const token = admin.generateToken();

  // Store token in HTTP-only cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    domain: "netlify.app", 
    maxAge: 60 * 60 * 1000, // 1 hour
  });
  

  res.status(200).json({
    message: "Login successful",
    admin,
    token,
  });
};

export { adminRegister, adminLogin };
