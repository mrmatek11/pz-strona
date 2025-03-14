import { motion } from "framer-motion";
import { Avatar } from "@heroui/avatar";
import { Badge } from "@heroui/badge";
import { Chip } from "@heroui/chip";
import { Tooltip } from "@heroui/tooltip";

const AdminSection = () => {
  const admins = [
    { 
      name: "mixu", 
      role: "Szef Techniczny", 
      color: "primary",
      avatar: "/avatars/mixu.png",
      specialties: ["Technologia", "Infrastruktura"]
    },
    { 
      name: "mixowa", 
      role: "Marketing & Social Media", 
      color: "secondary",
      avatar: "/avatars/mixowa.png",
      specialties: ["Promocja", "Komunikacja"]
    },
    { 
      name: "tado", 
      role: "Zarządzanie Modami", 
      color: "success",
      avatar: "/avatars/tado.png",
      specialties: ["Modyfikacje", "Rozwój"]
    },
    { 
      name: "hahuj", 
      role: "Administrator Rozgrywki", 
      color: "warning",
      avatar: "/avatars/hahuj.png",
      specialties: ["PvP", "Balans"]
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-16"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Nasza Administracja
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {admins.map((admin, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center space-y-4"
          >
            <Tooltip content={`${admin.name} - ${admin.role}`}>
              <Avatar 
                isBordered 
                color={admin.color as any} 
                src={admin.avatar} 
                className="w-32 h-32 text-large cursor-pointer"
              />
            </Tooltip>
            <div className="text-center">
              <div className="w-16 h-[2px] bg-black/50 mx-auto mb-2"></div>
              <Badge 
                color={admin.color as any} 
                variant="shadow" 
                className="mb-2"
              >
                {admin.name}
              </Badge>
              <p className="text-white/80 text-sm mb-2">{admin.role}</p>
              <div className="flex justify-center gap-2">
                {admin.specialties.map((specialty, specIndex) => (
                  <Chip 
                    key={specIndex} 
                    color={admin.color as any} 
                    variant="bordered" 
                    size="sm"
                  >
                    {specialty}
                  </Chip>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AdminSection;