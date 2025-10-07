import { Box, Card, Stack, Typography, useTheme } from "@mui/material";
import type { TAssemblyUnitPartCardUIProps } from "./type";
import type { FC } from "react";

const cardStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: 4,
  boxShadow: 8,
};

export const AssemblyUnitPartCardUI: FC<TAssemblyUnitPartCardUIProps> = ({
  part,
}) => {
  const theme = useTheme();

  if (!part) return <p>test</p>;

  return (
    <Box component={Card} sx={cardStyle}>
      <Box
        sx={{
          backgroundColor: theme.palette.grey[700],
          color: "#ffffff",
          p: 4,
        }}
      >
        <Typography variant="h4">{part.name}</Typography>
      </Box>
      <Stack sx={{ p: 4, gap: 1 }}>
        <Typography variant="body1">
          Номер чертежа: {part.blueprint?.id}
        </Typography>
        <Typography variant="body1">Используется в сборке:</Typography>
        <Typography variant="body1">Количество на комплект:</Typography>
      </Stack>
    </Box>
  );
};
