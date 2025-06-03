import RegisterForm from "@/components/forms/RegisterForm";
import LoginForm from "../components/forms/LoginForm";

export default function Home() {
  return <>
    <main>
      <h1 className="text-4xl font-bold text-center mt-10">Welcome to Project Management App 2.0</h1>
      <LoginForm />
      <p className="text-center mt-5 text-lg">Manage your projects efficiently with our new and improved app.</p>
    </main>
    <footer className="text-center mt-10">
      <RegisterForm />
      <p className="text-gray-600">© 2023 Project Management App. All rights reserved.</p>
    </footer>
  </>
}
