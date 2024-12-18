import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { HTMLMotionProps, motion, Transition } from "framer-motion";

interface BoxContainerProps extends HTMLMotionProps<any> {
  isOpen: boolean;
  info?: {
    label: string;
    description?: string;
  };
  // typescript-eslint/no-explicit-any
}

const transition: Transition = { type: "spring", stiffness: 250, damping: 30 }

const BoxContainer: React.FC<BoxContainerProps> = ({
  isOpen,
  info,
  ...rest
}) => {
  return (
    <motion.div
      initial={{ height: "3.33rem" }}
      animate={{ height: isOpen ? "13.23rem" : "3.33rem" }}
      transition={transition}
      style={{
        cursor: isOpen ? "pointer" : "unset",
        background: isOpen ? "#CDC4FF" : "#323236",
        borderRadius: "9px",
        padding: "1.07rem 1.125rem",
      }}
      {...rest}
    >
      <Box w="full">
        <Flex
          w="full"
          justify="space-between"
          pb={isOpen ? ".95rem" : 0}
          color={isOpen ? "#000" : "#FFF"}
        >
          <Text fontWeight={500} fontSize={isOpen ? "1.1875rem" : ".9375rem"}>
            {info?.label}
          </Text>
          {!isOpen && <Image src="/plus-icon.svg" alt={info?.label} />}
        </Flex>
        {isOpen ? (
          <Text color={isOpen ? "#000" : "#FFF"} pr="3rem">
            {info?.description}
          </Text>
        ) : null}
      </Box>
    </motion.div>
  );
};

export default BoxContainer;
