import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTheme } from "@/components/theme-provider";
import {
  Contact,
  Film,
  InstagramIcon,
  Loader,
  Mail,
  VideoIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters long"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});
const ContactPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  const { theme } = useTheme();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const handleSendToEmail = async (data) => {
    setLoading(true);
    try {
      // Data yang dikirim ke Web3Forms
      const formData = {
        access_key: import.meta.env.VITE_ACCESS_KEY, // Ganti dengan Access Key dari Web3Forms
        name: data.name, // Nama pengguna yang mengisi form
        email: data.email, // Email pengirim
        subject: "Message From Portfolio", // Subjek email
        message: data.message, // Pesan yang dikirim
      };

      // Mengirimkan request ke Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          description: "Your message has been sent.",
        });
      } else {
        toast({
          description: "Your message could not be sent.",
        });
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    } finally {
      setLoading(false);
      form.reset();
    }
  };
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <h1
        data-aos="fade-down"
        data-aos-duration="1000"
        className="text-2xl md:text-4xl text-primary font-extrabold tracking-wide text-center mb-16 max-md:mb-8 underline"
      >
        Contact{" "}
        <span
          className={`${
            theme === "dark"
              ? "text-secondary-foreground"
              : "text-primary-foreground"
          }`}
        >
          Me
        </span>
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="w-full flex flex-col ">
          <p className="text-xl font-bold underline tracking-wide mb-8">
            Let`s get in touch
          </p>
          <p className="text-sm mb-5">You can send your message in this form</p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSendToEmail)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@gmail.com" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about your problem"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={loading} type="submit">
                {loading ? (
                  <Loader size={24} className="animate-spin" />
                ) : (
                  "Send"
                )}
              </Button>
            </form>
          </Form>
        </div>
        <div className="flex h-[500px] w-1  max-md:hidden  border border-primary bg-primary" />
        <div className="w-full flex flex-col gap-5">
          <div className="flex items-center gap-3 text-lg font-semibold tracking-wide">
            <Mail size={24} />
            <p>andinaaulia1808@gmail.com</p>
          </div>
          <div className=" flex items-center gap-3 text-lg font-semibold tracking-wide">
            <Contact size={24} />
            <p>+62 815 4834 1428</p>
          </div>
          <Link
            to={"https://www.instagram.com/andinaauliaaa"}
            target="_blank"
            className=" flex items-center gap-3 text-lg font-semibold tracking-wide"
          >
            <InstagramIcon size={24} />
            <p className="underline">@andinaauliaaa</p>
          </Link>
          <Link
            to={
              "https://www.instagram.com/andinaauliaaahttps://www.tiktok.com/@andinaa.aul?_t=8qKoZ9Gzayu&_r=1get="
            }
            target="_blank"
            className=" flex items-center gap-3 text-lg font-semibold tracking-wide"
          >
            <Film size={24} />
            <p className="underline">@andina.aul</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
