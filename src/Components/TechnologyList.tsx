import type { CardInfo } from "../Types/CardInfoType";
import TechnologyCard from "./TechnologyCard";

interface TechnologyListProps {
  technologies: CardInfo[];
  addOn: (technology: CardInfo) => void;
  stack: CardInfo[];
}

const TechnologyList = ({
  technologies,
  addOn,
  stack,
}: TechnologyListProps) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => {
        const isAdded = stack.some((item) => item.id === technology.id);

        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            addOn={addOn}
            isAdded={isAdded}
          />
        );
      })}
    </div>
  );
};

export default TechnologyList;
