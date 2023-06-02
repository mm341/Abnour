import { motion } from 'framer-motion';

function Input({
  errors,
  touched,
  id,
  labelVal,
  inputVal,
  inputPlacholder,
  paraVal,
  inputFunction,
  type,
}) {
  return (
    <div className="parent">
        <label
          style={{ textShadow: ' 0px 1px 1px #005c5b' }}
          htmlFor={id}
          className="label"
        >
          {labelVal}
        </label>
        <div className="flex flex-col  xs:w-[80%] w-[90%]">
          <input
          required
            autoComplete="off"
            style={{
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            }}
            name={id}
            id={id}
            placeholder={inputPlacholder}
            value={inputVal}
            onChange={inputFunction}
            type={type}
            className="input"
          />

          {errors && touched ? (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1.5, type: 'tween' }}
            >
              <p className="pl-[10px] text-[12px] text-red-500">{paraVal}</p>
            </motion.div>
          ) : null}
        </div>
      </div>
  );
}
export default Input;
