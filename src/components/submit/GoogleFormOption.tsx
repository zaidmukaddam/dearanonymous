import useUser from "hooks/useUser";
import styles from "./GoogleFormOption.module.scss";

function GoogleFormOption() {
  const { user, isLoadingUser } = useUser();
  return (
    <div className={styles.GoogleFormOption}>
      {!isLoadingUser && (
        <p className={styles.GoogleFormOptionText}>
          Alternatively, submit via the{" "}
          {user?.verifiedNMIMS ? (
            <a href="https://forms.gle/g5e2XjbBaZL4R6DL8">Google Form</a>
          ) : (
            <>
              <a href="https://forms.gle/g5e2XjbBaZL4R6DL8">verified NMIMS</a>{" "}
              or <a href="https://forms.gle/sYnDzFoii6YeuT4d6">non-NMIMS</a>{" "}
              Google Form
            </>
          )}
          .
        </p>
      )}
    </div>
  );
}

export default GoogleFormOption;
