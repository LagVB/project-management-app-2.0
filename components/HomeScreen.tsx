import Logo from "@/img/logoPMA.svg";
import Image from "next/image";
import Link from "next/link";


export default function HomeScreen() {
    return <>
        <main className="h-full text-[#4b5563]">
            <nav className="flex w-full justify-between px-30 pt-5 mb-5">
                <div className="flex gap-2">
                    <Image alt="" src={Logo} className="w-10"></Image>
                    <h1>TaskFlow</h1>
                </div>
                <div className="flex gap-10 items-center">
                    <Link href={"/login"} className="text-[#374151] cursor-pointer hover:text-[#0000cc]">Login</Link>
                    <Link href={"/register"} className="bg-[#0000cc] cursor-pointer text-white font-semibold px-7 py-2 rounded-md">Register</Link>
                </div>
            </nav>
            <div className="h-full bg-linear-to-r from-[#eff6ff] to-[#e0e7ff] grid grid-cols-[40%_40%] px-10 py-20 justify-center gap-30">
                <div className="self-center flex flex-col gap-4">
                    <div>
                        <h2 className="text-black">TaskFlow Project</h2>
                        <h2 className="text-[#0000cc]">Overview</h2>
                    </div>
                    <p>A comprehensive project management solution designed to showcase modern web development skills and create value for teams worldwide.</p>
                    <div className="flex gap-4">
                        <button className="bg-[#0000cc] cursor-pointer text-white font-semibold px-7 py-2 rounded-md rounded-md">Explore Project</button>
                        <button className="border border-[#0000cc] cursor-pointer text-[#0000cc] px-7 rounded-md">Contact me</button>
                    </div>
                </div>
                <div className="bg-white">

                </div>
            </div>
            <div className="h-full flex flex-col gap-10 items-center text-justify px-10 py-20">
                <div className="flex flex-col gap-8 items-center text-justify px-80">
                    <h2 className="text-black">Project Purpose & Vision</h2>
                    <p>TaskFlow was created to demonstrate advanced web development capabilities while solving real-world project management challenges. This project serves as a portfolio piece that showcases technical expertise, design thinking, and problem-solving skills.</p>
                </div>
                <div className="grid grid-cols-[25%_25%_25%] justify-center gap-10">
                    <div className="flex flex-col items-center text-center gap-2 bg-[#eff6ff] px-6 py-8 rounded-md">
                        <h3>Learning & Growth</h3>
                        <p>Demonstrating continuous learning and adaptation to modern web technologies and best practices.</p>
                    </div>
                    <div className="flex flex-col items-center text-center gap-2 bg-[#f0fdf4] px-6 py-8 rounded-md">
                        <h3>Team Collaboration</h3>
                        <p>Building solutions that enhance team productivity and streamline project workflows.</p>
                    </div>
                    <div className="flex flex-col items-center text-center gap-2 bg-[#faf5ff] px-6 py-8 rounded-md">
                        <h3>Professional Impact</h3>
                        <p>Creating meaningful solutions that can make a real difference in how teams work together.</p>
                    </div>
                </div>
            </div>
            <div className="h-full flex flex-col gap-10 items-center bg-[#f9fafb] px-10 py-20">
                <div className="text-center">
                    <h2 className="text-black">Core Features & Technologies</h2>
                    <p>Built with modern technologies and thoughtful design principles</p>
                </div>
                <div className="grid grid-cols-[25%_25%_25%] justify-center gap-10">
                    <div className="flex flex-col gap-3 shadow-xl px-6 py-10 rounded-lg bg-white">
                        <h3>Secure Authentication</h3>
                        <p>Enterprise-grade security with modern authentication patterns and user session management.</p>
                        <div className="flex gap-2">
                            <h6 className="border rounded-full flex items-center px-2 bg-[#dbeafe] text-[#1d4ed8]">JWT</h6>
                            <h6 className="border rounded-full flex items-center px-2 bg-[#dbeafe] text-[#1d4ed8]">OAuth</h6>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 shadow-xl px-6 py-10 rounded-lg bg-white">
                        <h3>Responsive Design</h3>
                        <p>Fully responsive interface that works seamlessly across all devices and screen sizes.</p>
                        <div className="flex gap-2">
                            <h6 className="border rounded-full flex items-center px-2 bg-[#dcfce7] text-[#15803d]">Tailwind CSS</h6>
                            <h6 className="border rounded-full flex items-center px-2 bg-[#dcfce7] text-[#15803d]">Mobile-First</h6>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 shadow-xl px-6 py-10 rounded-lg bg-white">
                        <h3>Real-time Data</h3>
                        <p>Live updates and synchronization across all connected devices and team members.</p>
                        <div className="flex gap-2">
                            <h6 className="border rounded-full flex items-center px-2 bg-[#f3e8ff] text-[#7e22ce]">WebSocket</h6>
                            <h6 className="border rounded-full flex items-center px-2 bg-[#f3e8ff] text-[#7e22ce]">API</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full bg-[#0000cc] gap-20 text-white flex flex-col items-center px-10 py-20">
                <div className="flex flex-col items-center">
                    <h2>Let's Connect</h2>
                    <p>Interested in discussing this project or exploring collaboration opportunities? I'd love to hear from you.</p>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    <div className="flex flex-col items-center bg-[#ffffff1a] px-5 py-10 gap-2 rounded-md">
                        <h4 className="font-bold">Email</h4>
                        <p className="text-sm">luizaugusto1299@gmail.com</p>
                    </div>
                    <div className="flex flex-col items-center bg-[#ffffff1a] px-5 py-10 gap-2 rounded-md">
                        <h4 className="font-bold">LinkedIn</h4>
                        <p>Conect with me</p>
                    </div>
                    <div className="flex flex-col items-center bg-[#ffffff1a] px-5 py-10 gap-2 rounded-md">
                        <h4 className="font-bold">GitHub</h4>
                        <p>View source code</p>
                    </div>
                </div>
                <button className="bg-white text-[#0000cc] px-6 py-3 rounded-md font-bold">Get in Touch</button>
            </div>
            <div className="bg-black py-10 flex justify-between px-25 items-center">
                <div className="flex gap-2 items-center">
                    <Image alt="" src={Logo} className="w-10"></Image>
                    <span className="text-white">TaskFlow</span>
                </div>
                <p className="font-bold">© 2025 TaskFlow Project. Built for learning and professional development.</p>
            </div>
        </main>
    </>
}