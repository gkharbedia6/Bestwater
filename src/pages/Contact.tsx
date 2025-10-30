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
import { ArrowRightIcon, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  comment: z.string(),
});

function Contact() {
  const { t } = useTranslation();
  const storedLang = localStorage.getItem("i18nextLng");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <div className="flex flex-row items-start gap-10">
      <div className="flex w-[50%] flex-col items-start justify-start gap-4">
        <div className="flex flex-col w-[50%] gap-4">
          <h3
            className={cn("text-2xl font-bold", {
              "font-ge": storedLang === "ge",
              "font-en-ru": storedLang !== "ge",
            })}
          >
            ინფორმაცია
          </h3>
          <ul className="flex flex-col gap-2 py-4">
            <p className="text-sm pb-4 ">
              რამე ინფორმაცია რამე ინფორმატია რამე ინფორმატია რამე ინფორმატია
              რამე ინფორმატია რამე ინფორმატია რამე ინფორმატია რამე ინფორმატია
            </p>
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
            <p className="text-sm">{t("Footer.address")}</p>
          </ul>
        </div>
        <MapEmbed />
      </div>
      <div className="w-[50%] flex flex-col gap-4">
        <h3
          className={cn("text-2xl font-bold", {
            "font-ge": storedLang === "ge",
            "font-en-ru": storedLang !== "ge",
          })}
        >
          საკონტაქტო ფორმა
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
                      სახელი
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-input-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="სახელი"
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
                      მეილი
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-input-email"
                      aria-invalid={fieldState.invalid}
                      placeholder="მეილი"
                      autoComplete="email"
                    />
                    {/* <FieldDescription>
                    This is your public display name. Must be between 3 and 10
                    characters. Must only contain letters, numbers, and
                    underscores.
                  </FieldDescription> */}
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
                    კომენტარი
                  </FieldLabel>
                  <Textarea
                    {...field}
                    id="form-rhf-input-comment"
                    aria-invalid={fieldState.invalid}
                    autoComplete="comment"
                    placeholder="ჩაწერეთ აქ."
                    className="min-h-[150px]"
                  />
                  <FieldDescription>
                    გთხოვთ ჩაჭეროთ თქვენი ინტერესი/მოთხოვნა.
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
            className="cursor-pointer"
            type="button"
            variant="outline"
            onClick={() => form.reset()}
          >
            Reset
          </Button>
          <Button
            className="cursor-pointer"
            type="submit"
            form="form-rhf-input"
          >
            Save
          </Button>
        </Field>
      </div>
    </div>
  );
}

export default Contact;
