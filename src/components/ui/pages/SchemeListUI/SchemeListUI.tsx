import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import type { FC } from "react";
import type { TSchemeListUIProps } from "./type";
import { BuildCircle } from "@mui/icons-material";

export const SchemeListUI: FC<TSchemeListUIProps> = ({
  parts,
  filter,
  filterHandler,
}) => {
  return (
    <Box>
      <Box>
        <Stack gap={4}>
          <Typography variant="h2">Поиск по чертежам</Typography>
          <TextField
            value={filter}
            onChange={(e) => filterHandler(e.target.value)}
            placeholder="Номер чертежа, название детали..."
            fullWidth
          />
          <List>
            {parts.map((part) => (
              <ListItemButton
                key={part.id}
                sx={{ gap: 2, p: 2, borderRadius: 4 }}
              >
                <BuildCircle />
                <ListItemText
                  primary={`${part.blueprint?.id ? `${part.blueprint.id} | ` : ""}${part.name}`}
                />
              </ListItemButton>
            ))}
          </List>
        </Stack>
      </Box>
    </Box>
  );
};
