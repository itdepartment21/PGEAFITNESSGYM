import React from "react";
import { Grid, Box } from "@mui/material";

import {
  BlogCard
} from "./dashboard1-components";
import DataTable from "./dashboard1-components/DataTable";

const Dashboard1 = () => {
  // 2

  return (
    <Box>
      <Grid container spacing={0}>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid item xs={12} lg={12}>
        <BlogCard />
        </Grid>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid item xs={12} lg={12}>
          <DataTable/>
        </Grid>
        {/* ------------------------- row 2 ------------------------- */}
        <Grid item xs={12} lg={4}>
        </Grid>
        <Grid item xs={12} lg={8}>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard1;
