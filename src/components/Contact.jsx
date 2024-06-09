import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./Loader";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../data/EmailJS";
import { useTranslation } from "react-i18next";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useRecoilValue } from "recoil";
import { getInTouchSelector } from "../recoil/selectors";
import { database } from "../firebaseConfig";
import { ref, set } from "firebase/database";

import dayjs from "dayjs";
import { random } from "lodash";

const notifyFail = (trans) => toast.error(trans);
const notifyFailToUseEmail = (trans) => toast.error(trans);
const notifySuccess = (trans) => toast.success(trans);

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const { t: translate } = useTranslation();
  const getInTouch = useRecoilValue(getInTouchSelector);

  const sendMessage = async (e) => {
    e.preventDefault();
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const { user_email, message } = form.current;

    if (
      getInTouch.find((item) => item.email.trim() === user_email.value.trim())
    ) {
      notifyFail(translate("emailExist"));
      return;
    }

    if (!regexEmail.test(user_email.value)) {
      notifyFail(translate("invalidEmail"));
      clearInput();
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);

      set(
        ref(
          database,
          "getInTouch/emailReceived/" + `${random(1, 2000000000)}_email`
        ),
        {
          email: user_email.value.trim(),
          message: message.value,
          dateSent: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        }
      );

      notifySuccess(translate("successToSendEmail"));
    } catch (e) {
      console.log(e);
      notifyFailToUseEmail(translate("failToSendEmail"));
      return;
    } finally {
      setIsLoading(false);
      clearInput();
    }
  };

  const clearInput = () => {
    const { user_email, user_name, message } = form.current;
    user_email.value = "";
    user_name.value = "";
    message.value = "";
  };

  return (
    <section id="contact" className="py:16 lg:section h-[90vh]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <motion.div
            className="flex-1"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div>
              <h4
                className="text-xl uppercase text-accent font-medium mb-2
              tracking-wide
              "
              >
                {translate("getInTouch")}
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                {translate("letWorkTogether")}
              </h2>
            </div>
          </motion.div>
          <motion.form
            onSubmit={(e) => sendMessage(e)}
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            ref={form}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus: border-accent transition-all"
              type="text"
              placeholder={translate("yourEmail")}
              name="user_email"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus: border-accent transition-all"
              type="text"
              placeholder={translate("yourName")}
              name="user_name"
              required
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus: border-accent transition-all resize-none mb-12"
              placeholder={translate("yourMessage")}
              name="message"
              required
            ></textarea>
            <button disabled={isLoading} className="btn btn-sm w-[170px]">
              {isLoading ? (
                <Loader color={"dark:fill-gray-300"} />
              ) : (
                translate("sendMessage")
              )}
            </button>
            <div className="flex gap-2">
              <InfoCircleOutlined className="text-accent" />
              <span className="text-accent text-sm">
                {translate("sendEmailInfo")}
              </span>
            </div>
          </motion.form>
        </div>
      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            background:
              "linear-gradient( 92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #3bace2 100%, #406aff 117.04%",
            color: "white",
            fontWeight: "bold",
          },
        }}
      />
    </section>
  );
};

export default Contact;
