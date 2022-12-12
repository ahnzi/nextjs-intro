import NavBar from "../components/Navbar";

// 유저에게 보여주고 싶으면 반드시 export default function()을 해야합니다.
export default function About() {
    return (
        <div>
            <NavBar />
            <h1>About</h1>
        </div>
    );
}