import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { ReactionIcon } from "~shared/ui/reaction-icon";

export const getRating = (averageScore: number) => {
  if (averageScore >= 75)
    return (
      <ReactionIcon
        icon={<SmileOutlined />}
        color="green"
        averageScore={averageScore}
      />
    );
  else if (averageScore < 75 || averageScore >= 50)
    return (
      <ReactionIcon
        icon={<MehOutlined />}
        color="orange"
        averageScore={averageScore}
      />
    );
  else
    return (
      <ReactionIcon
        icon={<FrownOutlined />}
        color="red"
        averageScore={averageScore}
      />
    );
};
