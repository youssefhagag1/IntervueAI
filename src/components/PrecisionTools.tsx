import precisionTools from "@/lib/constants/precisionTools";
import IPrecisionTools from "@/types/precisionTools";
import Container from "./Container";
import Text, { SubTitle, Title } from "@/components/Text";

function PrecisionTools() {
  return (
    <div className="bg-white py-16">
      <div className="mb-10 space-y-2">
        <Title>Precision tools for serious candidates.</Title>
        <Text className="text-center text-gray-600">
          Everything you need to master the technical interview process.
        </Text>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {precisionTools.map((tool: IPrecisionTools) => (
            <div
              key={tool.title}
              className="bg-white border rounded-md p-6 flex flex-col gap-4 justify-center"
            >
              <tool.icon className="w-6 h-6 text-primary" />
              <SubTitle>{tool.title}</SubTitle>
              <Text>{tool.description}</Text>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default PrecisionTools;
