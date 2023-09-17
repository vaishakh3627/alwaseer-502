import { useContext } from "react";
import Menu from "@mui/material/Menu";
import PropTypes from "prop-types";

import { AuthContext } from "context";
import MDBox from "components/MDBox";
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";

function DefaultNavbarMobile({ open, close }) {
  const authContext = useContext(AuthContext);
  const { width } = open && open.getBoundingClientRect();

  return (
    <Menu
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      MenuListProps={{ style: { width: `calc(${width}px - 4rem)` } }}
    >
      {!authContext.isAuthenticated && (
        <MDBox px={0.5}>
          <DefaultNavbarLink
            icon="account_circle"
            name="register"
            route="/auth/register"
          />
          <DefaultNavbarLink icon="key" name="login" route="/auth/login" />
        </MDBox>
      )}
      {authContext.isAuthenticated && (
        <MDBox px={0.5}>
          <DefaultNavbarLink
            icon="donut_large"
            name="dashboard"
            route="/dashboard"
          />
          <DefaultNavbarLink icon="person" name="profile" route="/profile" />
          <DefaultNavbarLink
            icon="account_circle"
            name="sign up"
            route="/authentication/sign-up"
          />
          <DefaultNavbarLink
            icon="key"
            name="sign in"
            route="/authentication/sign-in"
          />
        </MDBox>
      )}
    </Menu>
  );
}

DefaultNavbarMobile.propTypes = {
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object])
    .isRequired,
};

export default DefaultNavbarMobile;
