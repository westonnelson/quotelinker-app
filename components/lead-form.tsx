"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Car, Home, HeartPulse, Stethoscope, CheckCircle, ArrowRight, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { submitLeadToSupabase } from "@/lib/supabase"

const formSchema = z.object({
  insuranceType: z.string({
    required_error: "Please select an insurance type",
  }),
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  zipCode: z.string().min(5, {
    message: "Please enter a valid ZIP code.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export default function LeadForm() {
  const [step, setStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      insuranceType: "",
      fullName: "",
      zipCode: "",
      phoneNumber: "",
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setError(null)

    try {
      await submitLeadToSupabase({
        name: values.fullName,
        email: values.email,
        phone: values.phoneNumber,
        zipCode: values.zipCode,
        insuranceType: values.insuranceType,
        timestamp: new Date().toISOString(),
      })
      setIsSubmitted(true)
    } catch (err) {
      setError("There was an error submitting your request. Please try again.")
      console.error("Form submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (step === 1) {
      const insuranceType = form.getValues("insuranceType")
      if (!insuranceType) {
        form.setError("insuranceType", {
          type: "manual",
          message: "Please select an insurance type",
        })
        return
      }
      form.clearErrors("insuranceType")
    }

    if (step === 2) {
      const fullName = form.getValues("fullName")
      const zipCode = form.getValues("zipCode")
      if (!fullName || !zipCode) {
        if (!fullName) {
          form.setError("fullName", {
            type: "manual",
            message: "Please enter your full name",
          })
        }
        if (!zipCode) {
          form.setError("zipCode", {
            type: "manual",
            message: "Please enter your ZIP code",
          })
        }
        return
      }
      form.clearErrors(["fullName", "zipCode"])
    }

    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const getInsuranceIcon = (type: string) => {
    switch (type) {
      case "auto":
        return <Car className="h-5 w-5" />
      case "home":
        return <Home className="h-5 w-5" />
      case "life":
        return <HeartPulse className="h-5 w-5" />
      case "health":
        return <Stethoscope className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl bg-white border-0 overflow-hidden">
      <CardContent className="p-0">
        {!isSubmitted ? (
          <>
            <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-white">
              <h2 className="text-xl font-semibold text-center">
                {step === 1
                  ? "What insurance do you need?"
                  : step === 2
                    ? "Tell us about yourself"
                    : "How should we contact you?"}
              </h2>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-1 w-full">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full flex-1 transition-all duration-300 ${
                        i <= step ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm font-medium ml-4 whitespace-nowrap">Step {step} of 3</div>
              </div>
            </div>

            <div className="p-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm flex items-center"
                >
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {error}
                </motion.div>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <FormField
                          control={form.control}
                          name="insuranceType"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <SelectTrigger className="h-14 text-base bg-white border-gray-300 text-gray-700 rounded-md">
                                    <SelectValue placeholder="Select insurance type" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-white">
                                    <SelectItem value="auto">
                                      <div className="flex items-center py-1">
                                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                                          <Car className="h-5 w-5 text-primary" />
                                        </div>
                                        <span>Auto Insurance</span>
                                      </div>
                                    </SelectItem>
                                    <SelectItem value="home">
                                      <div className="flex items-center py-1">
                                        <div className="bg-green-100 p-2 rounded-full mr-3">
                                          <Home className="h-5 w-5 text-green-600" />
                                        </div>
                                        <span>Home Insurance</span>
                                      </div>
                                    </SelectItem>
                                    <SelectItem value="life">
                                      <div className="flex items-center py-1">
                                        <div className="bg-red-100 p-2 rounded-full mr-3">
                                          <HeartPulse className="h-5 w-5 text-red-500" />
                                        </div>
                                        <span>Life Insurance</span>
                                      </div>
                                    </SelectItem>
                                    <SelectItem value="health">
                                      <div className="flex items-center py-1">
                                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                                          <Stethoscope className="h-5 w-5 text-purple-600" />
                                        </div>
                                        <span>Health Insurance</span>
                                      </div>
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="w-full h-12 text-base bg-secondary hover:bg-secondary/90 text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                        >
                          Continue
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700">Full Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter your full name"
                                  className="h-12 text-base bg-white border-gray-300 text-gray-700 rounded-md"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="zipCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700">ZIP Code</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter your ZIP code"
                                  className="h-12 text-base bg-white border-gray-300 text-gray-700 rounded-md"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        <div className="flex space-x-3 pt-2">
                          <Button
                            type="button"
                            onClick={prevStep}
                            variant="outline"
                            className="flex-1 h-12 text-base border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            Back
                          </Button>
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="flex-1 h-12 text-base bg-secondary hover:bg-secondary/90 text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                          >
                            Continue
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <FormField
                          control={form.control}
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700">Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter your phone number"
                                  className="h-12 text-base bg-white border-gray-300 text-gray-700 rounded-md"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700">Email Address</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter your email address"
                                  className="h-12 text-base bg-white border-gray-300 text-gray-700 rounded-md"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>
                          )}
                        />
                        <div className="flex space-x-3 pt-2">
                          <Button
                            type="button"
                            onClick={prevStep}
                            variant="outline"
                            className="flex-1 h-12 text-base border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 h-12 text-base bg-secondary hover:bg-secondary/90 text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              "Get Quotes"
                            )}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </Form>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 px-6"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6"
            >
              <CheckCircle className="h-10 w-10 text-green-600" />
            </motion.div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800">Thank You!</h2>
            <p className="text-green-600 font-medium mb-4">Your quote request has been submitted successfully!</p>
            <p className="text-gray-600 mb-8 max-w-xs mx-auto">
              A licensed local agent will contact you shortly with personalized insurance quotes.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setStep(1)
                form.reset()
              }}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
            >
              Submit Another Request
            </Button>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}

