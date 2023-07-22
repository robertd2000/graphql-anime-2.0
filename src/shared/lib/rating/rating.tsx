import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { baseColors } from "~shared/constants/colors";
import { ReactionIcon } from "~shared/ui/reaction-icon";

export const getRating = (averageScore: number) => {
  if (averageScore >= 75)
    return (
      <ReactionIcon
        icon={<SmileOutlined />}
        color={baseColors.green}
        averageScore={averageScore}
      />
    );
  else if (averageScore < 75 || averageScore >= 50)
    return (
      <ReactionIcon
        icon={<MehOutlined />}
        color={baseColors.warning}
        averageScore={averageScore}
      />
    );
  else
    return (
      <ReactionIcon
        icon={<FrownOutlined />}
        color={baseColors.red}
        averageScore={averageScore}
      />
    );
};
