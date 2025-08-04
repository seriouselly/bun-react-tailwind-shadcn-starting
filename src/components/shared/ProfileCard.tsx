import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { SocialMediaProfile } from "@/interface/";
import { Github, Linkedin } from "lucide-react";

interface ProfileCardProps {
  name: string;
  description: string;
  image: string;
  socialMedia: SocialMediaProfile[];
}

export const ProfileCard = ({
  name,
  description,
  image,
  socialMedia,
}: ProfileCardProps) => {
  return (
    <Card className="max-w-[600] mx-auto shadow-lg border p-30 text-center space-y-4">
      <Avatar className="w-30 h-30 mx-auto">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <CardContent>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-center gap-4 mt-5 flex-wrap">
          {socialMedia.map((item) => {
            let IconComponent;

            switch (item.name.toLowerCase()) {
              case "linkedin":
                IconComponent = Linkedin;
                break;
              case "github":
                IconComponent = Github;
                break;
              default:
                IconComponent = null;
            }

            return (
              <Button
                key={item.name}
                variant="outline"
                onClick={() => window.open(item.url, "_blank")}
              >
                {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                {item.name}
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
