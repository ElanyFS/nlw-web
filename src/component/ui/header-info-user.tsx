import { Button } from "./button";
import { LogOut } from "lucide-react";
export function HeaderInfoUser() {
  async function logout() {
    const token = localStorage.getItem("token");

    if (token) {
      localStorage.removeItem("token");
      window.location.reload();
    }
  }

  return (
    <div className="flex items-center justify-center pt-10">
      <div className="w-3/6 text-slate-100 flex items-center justify-around">
        <p>{}</p>
        <Button variant="tertiary" onClick={logout}>
          <LogOut />
          Logout
        </Button>
      </div>
    </div>
  );
}
