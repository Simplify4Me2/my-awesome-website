import { Header } from "../../components/header";
import { Button, Container } from "@mui/material";
import { RadiusInputField } from "./RadiusInputField";
import { PreviewBox } from "./PreviewBox";
import { useRadiusState } from "./useRadiusState";

export function BorderRadiusPreviewer() {
  const { radius, updateBottomLeft, updateBottomRight, updateTopLeft, updateTopRight } = useRadiusState();

  const copyCSSToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`border-radius: ${radius.topLeft} ${radius.topRight} ${radius.bottomRight} ${radius.bottomLeft};`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-primary text-center">
        Border-radius Previewer
      </h1>
      <Container
        sx={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}
      >
        <PreviewBox radius={radius} />
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          maxWidth="xs"
        >
          <RadiusInputField
            label="Border radius top left"
            onChange={updateTopLeft}
          />
          <RadiusInputField
            label="Border radius top right"
            onChange={updateTopRight}
          />
          <RadiusInputField
            label="Border radius bottom left"
            onChange={updateBottomLeft}
          />
          <RadiusInputField
            label="Border radius bottom right"
            onChange={updateBottomRight}
          />
        </Container>
      </Container>
      <Button
        onClick={copyCSSToClipboard}
        variant="outlined"
        sx={{ marginTop: "3rem", marginLeft: "10rem" }}
      >
        Copy CSS to Clipboard
      </Button>
    </>
  );
}
