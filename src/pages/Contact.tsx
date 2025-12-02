import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MapEmbed from "@/components/MapEmbed";
import { LoaderCircle, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "sonner";

function Contact() {
  const { t } = useTranslation();
  const storedLang = localStorage.getItem("i18nextLng");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formSchema = z.object({
    name: z.string().min(1, t("Contact.form.items.name.error-msg")),
    email: z
      .email(t("Contact.form.items.email.error-msg-email"))
      .min(1, t("Contact.form.items.email.error-msg")),
    comment: z.string().min(1, t("Contact.form.items.comment.error-msg")),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      // console.log(res.text);
      toast.success(t("Contact.form.alert.success"));
      form.reset();
    } catch (error) {
      setIsLoading(false);
      toast.error(t("Contact.form.alert.error"));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-start gap-10 my-6 md:my-0">
      <div className="flex md:w-[50%] flex-col items-center md:items-start justify-center md:justify-start gap-4">
        <div className="flex flex-col md:w-[50%] gap-4">
          <h3
            className={cn("text-lg md:text-2xl font-bold", {
              "font-ge": storedLang === "ge",
              "font-en-ru": storedLang !== "ge",
            })}
          >
            {t("Contact.info.title")}
          </h3>
          <ul className="flex flex-col gap-2 pb-4">
            <div>
              <a
                href="tel:+995599077575"
                className="flex flex-row items-center gap-3 cursor-pointer text-xs group"
              >
                <Phone
                  size={15}
                  className="text-sm group-hover:text-red-700 transition-colors duration-200"
                />
                <span className="text-sm group-hover:text-red-700 transition-colors duration-200">
                  +995 599077575
                </span>
              </a>
              <a
                href="mailto:75bibileishvili@gmail.com"
                className="flex flex-row items-center gap-3 cursor-pointer text-xs group"
              >
                <Mail
                  size={15}
                  className="text-sm group-hover:text-red-700 transition-colors duration-200"
                />
                <span className="text-sm group-hover:text-red-700 transition-colors duration-200">
                  75bibileishvili@gmail.com
                </span>
              </a>
              <p className="text-sm">{t("Contact.address")}</p>
            </div>
          </ul>
        </div>
        <MapEmbed />
      </div>
      <div className="w-full md:w-[50%] flex flex-col gap-4">
        <h3
          className={cn("text-lg md:text-2xl font-bold", {
            "font-ge": storedLang === "ge",
            "font-en-ru": storedLang !== "ge",
          })}
        >
          {t("Contact.form.title")}
        </h3>
        <form id="form-rhf-input" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <div className="flex flex-row justify-evenly gap-4">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-input-name">
                      {t("Contact.form.items.name.label")}
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-input-name"
                      aria-invalid={fieldState.invalid}
                      placeholder={t("Contact.form.items.name.placeholder")}
                      autoComplete="name"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-input-email">
                      {t("Contact.form.items.email.label")}
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-input-email"
                      aria-invalid={fieldState.invalid}
                      placeholder={t("Contact.form.items.email.placeholder")}
                      autoComplete="email"
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            <Controller
              name="comment"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-input-comment">
                    {t("Contact.form.items.comment.label")}
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="form-rhf-input-comment"
                    aria-invalid={fieldState.invalid}
                    autoComplete="comment"
                    placeholder={t("Contact.form.items.comment.placeholder")}
                    className="min-h-[150px]"
                  />
                  <FieldDescription>
                    {t("Contact.form.items.comment.description")}
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
        <Field orientation="horizontal" className="pt-4">
          <Button
            disabled={isLoading}
            className="cursor-pointer min-w-[75px]"
            type="button"
            variant="outline"
            onClick={() => form.reset()}
          >
            {t("Contact.form.sending.reset_button")}
          </Button>
          <Button
            disabled={isLoading}
            className="cursor-pointer min-w-[75px]"
            type="submit"
            form="form-rhf-input"
          >
            {isLoading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <span>{t("Contact.form.sending.send_button")}</span>
            )}
          </Button>
        </Field>
      </div>
    </div>
  );
}

export default Contact;
