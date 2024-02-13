import Mixpanel from "mixpanel";
import { Header } from "@/components";
import { Link, Typography } from "@mui/material";

// https://eu.mixpanel.com/project/3155699/view/3668731/app/boards#discover

var mixpanel = Mixpanel.init("0f87eaa3213984698f3f1067bc243571");

// Note: you must supply the user_id who performed the event in the `distinct_id` field
mixpanel.track("Signed Up", {
  distinct_id: "user_id",
  "Signup Type": "Referral",
});

export default function Page() {
  return (
    <main className="bg-sky-100 h-screen">
      <Header />
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Hi
      </Typography>
      <Typography variant="h5" component="div">
        I&lsquo;m Simon
      </Typography>
      <Typography sx={{ mb: 1.5, fontSize: 36 }} color="text.secondary">
        Full-stack software developer
      </Typography>
      <Typography variant="body1">
        My main areas of expertise include C#, Angular and React.
        <br />I like to craft solid and scalable frontend products with great
        user experience.
      </Typography>
      <Link href="qr-code">Link to QR Code Component</Link>
    </main>
  );
}
