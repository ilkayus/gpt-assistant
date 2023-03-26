import { Button, Grid, List, Typography } from "@mui/material";
import { prompts } from "../data/prompts";
import { useWindowSize } from "../hooks/useWindowSize";
import { breakPoints } from "../style/breakPoints";
import styles from "../style/promptOptions.module.css";

const PromptOptions = ({ setSelectedPrompt, selectedPrompt }: any) => {
  const { width } = useWindowSize();

  const isSmall = width <= breakPoints.sm;

  return (
    <>
      <Typography color="#fff" variant="h6">
        Available Assistants
      </Typography>
      <List className={styles.list}>
        {prompts.map((prompt) => {
          const Icon = prompt.icon;

          return (
            <Button
              variant={
                selectedPrompt.id === prompt.id ? "contained" : "outlined"
              }
              key={prompt.id.toString()}
              className={styles.button}
              sx={{
                marginTop: "1rem",
                padding: "1rem",
                height: isSmall ? "3rem" : "5rem",
                marginRight: isSmall ? "1rem" : 0,
                minWidth: isSmall ? "10rem" : "12rem",
              }}
              onClick={() => setSelectedPrompt(prompt)}
            >
              <Icon
                sx={{
                  marginRight: "1rem",
                }}
              />
              <Typography variant={isSmall ? "subtitle2" : "subtitle1"}>
                {prompt.key}
              </Typography>
            </Button>
          );
        })}
      </List>
    </>
  );
};

export { PromptOptions };