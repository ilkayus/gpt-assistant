import { Button, Tooltip, Typography } from "@mui/material";
import usePrompts from "../hooks/usePrompts";
import { useWindowSize } from "../hooks/useWindowSize";
import { breakPoints } from "../style/breakPoints";
import styles from "../style/promptOptions.module.css";

const PromptOptions = ({ setSelectedPrompt, selectedPrompt }: any) => {
  const prompts = usePrompts();
  const { width } = useWindowSize();

  const isSmall = width <= breakPoints.sm;

  return (
    <>
      <div className={styles.list}>
        {prompts.map((prompt) => {
          const Icon = prompt.icon;
          return (
            <Tooltip title={prompt.explanation} placement="right">
              <Button
                variant={
                  selectedPrompt.id === prompt.id ? "contained" : "outlined"
                }
                key={prompt.id.toString()}
                className={styles.button}
                sx={{
                  marginTop: "1rem",
                  marginLeft: isSmall ? "1rem" : 0,
                  padding: "1rem",
                  height: isSmall ? "3rem" : "5rem",
                  minWidth: "12rem",
                }}
                onClick={() => setSelectedPrompt(prompt)}
              >
                <>
                  <Icon
                    sx={{
                      marginRight: "1rem",
                    }}
                  />
                  <Typography variant={isSmall ? "subtitle2" : "subtitle1"}>
                    {prompt.key}
                  </Typography>
                </>
              </Button>
            </Tooltip>
          );
        })}
      </div>
    </>
  );
};

export { PromptOptions };
