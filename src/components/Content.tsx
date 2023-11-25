import { useState } from "react";
import Roles from "./Roles";
import BtnRole from "./BtnRole";

const Content = () => {
  const [contentActive, setContentActive] = useState(true);
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleClick = (role: string) => {
    setSelectedRole(role);
    setContentActive(false);
  };

  return (
    <div className="w-full mt-8 mb-5">
      {contentActive ? (
        <div className="grid grid-cols-2 justify-center items-center gap-4">
          <BtnRole value="TANQUE" onClick={() => handleRoleClick("Tank")} />
          <BtnRole
            value="ASESINO"
            onClick={() => handleRoleClick("Assassin")}
          />
          <BtnRole
            value="TIRADOR"
            onClick={() => handleRoleClick("Marksman")}
          />
          <BtnRole value="MAGO" onClick={() => handleRoleClick("Mage")} />
          <BtnRole value="APOYO" onClick={() => handleRoleClick("Support")} />
          <BtnRole
            value="COMBATIENTE"
            onClick={() => handleRoleClick("Fighter")}
          />
        </div>
      ) : (
        <div className="space-y-3">
          <Roles
            selectedRole={selectedRole}
            setContentActive={setContentActive}
          />
        </div>
      )}
    </div>
  );
};

export default Content;
