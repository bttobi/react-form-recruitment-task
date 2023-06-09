import { TextField } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const SandwichOptions: React.FC<{ register: any; errors: any }> = ({
  register,
  errors,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className="w-full flex flex-col justify-center items-center"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
      >
        <div className="w-full h-full relative pb-5 flex flex-row justify-center items-center">
          <AnimatePresence>
            {errors?.slices_of_bread && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-min z-10 left-4 top-auto bottom-0 absolute text-sm text-red-400"
              >
                {errors?.slices_of_bread?.message}
              </motion.p>
            )}
          </AnimatePresence>
          <TextField
            label=" Bread slices 🍞 (1-6) *"
            InputLabelProps={{ shrink: true }}
            {...register("slices_of_bread", {
              required: { value: true, message: "This field is required" },
              shouldUnregister: true,
              valueAsNumber: true,
              min: { value: 1, message: "Value must be between 1 and 6" },
              max: { value: 6, message: "Value must be between 1 and 6" },
              validate: {
                decimal: (val: any) =>
                  parseInt(val) == val || "Must be a whole number",
              },
            })}
            type="number"
            variant="outlined"
            aria-label="slices of bread"
            inputProps={{
              step: "1",
              inputMode: "numeric",
              defaultValue: 1,
              min: 1,
              max: 6,
            }}
            className="w-full"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SandwichOptions;
