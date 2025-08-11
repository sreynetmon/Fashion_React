import React from "react";
import { Button, Label } from "flowbite-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "react-router";
import { useCreateProductMutation } from "../redux/features/car/car";

// {
//   "make": "string",
//   "model": "string",
//   "year": 0,
//   "price": 0,
//   "mileage": 0,
//   "description": "string",
//   "color": "string",
//   "fuel_type": "string",
//   "transmission": "string",
//   "image": "string"
// }
//define schema validation for create car already
const schemaValidation = z.object({
  make: z.string().min(1, "Make is required"),
  model: z.string().min(1, "Model is required"),
  year: z.number().min(1886, "Year must be a valid year"),
  price: z.number().min(0, "Price must be a positive number"),
  mileage: z.number().min(0, "Mileage must be a positive number"),
  color: z.string().min(1, "Color is required"),
  fuel_type: z.string().min(1, "Fuel type is required"),
  transmission: z.string().min(1, "Transmission is required"),
  description: z.string().optional(),
  image: z.string().min(1, "Image must be a valid URL"),
});

export default function ProductsForm() {
  //using create product mutation
  const [createCar, { data, error, isLoading }] = useCreateProductMutation();

  //define using with useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaValidation),
    defaultValues: {
      make: "",
      model: "",
      year: 2000,
      price: 0,
      mileage: 0,
      color: "",
      fuel_type: "",
      transmission: "",
      description: "",
      image: "",
    },
  });

  //accessToken
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtb25zcmV5bmV0MjQwOUBnbWFpbC5jb20iLCJleHAiOjE3NTQ4ODU5MDYsInR5cGUiOiJhY2Nlc3MifQ.Q9iID3-tdLxIzVCYUDBfgsKPB-HWnFLDfY_YTgPhnYY";
  function onSubmit(values) {
    createCar({
      newCar: {
        make: values.make,
        model: values.model,
        year: values.year,
        price: values.price,
        mileage: values.mileage,
        color: values.color,
        fuel_type: values.fuel_type,
        transmission: values.transmission,
        description: values.description,
        image: values.image,
      },
      accessToken: accessToken,
    });
  }

  return (
    <>
      <div className="container w-full h-auto mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[80%] gap-4 border-1 p-5 rounded-lg flex flex-col mx-auto justify-items-center"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1">Make</Label>
            </div>
            <input
              id="email1"
              type="text"
              placeholder="Car Make"
              required
              {...register("make")}
              className="border p-2 rounded-lg w-full"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1">Model</Label>
            </div>
            <input
              id="password1"
              type="text"
              placeholder="Car Model"
              required
              {...register("model")}
              className="border p-2 rounded-lg w-full"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="year">Year</Label>
            </div>
            <input
              id="year"
              type="number"
              placeholder="Car Year"
              required
              {...register("year", { valueAsNumber: true })}
              className="border p-2 rounded-lg w-full"
            />
            {errors.year && (
              <span className="text-red-500 text-sm">
                {errors.year.message}
              </span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="price">Price</Label>
            </div>
            <input
              id="price"
              type="number"
              placeholder="Price in USD"
              required
              {...register("price", { valueAsNumber: true })}
              className="border p-2 rounded-lg w-full"
            />
            {errors.price && (
              <span className="text-red-500 text-sm">
                {errors.price.message}
              </span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="mileage">Mileage</Label>
            </div>
            <input
              id="mileage"
              type="number"
              placeholder="Car Mileage"
              required
              {...register("mileage", { valueAsNumber: true })}
              className="border p-2 rounded-lg w-full"
            />
            {errors.mileage && (
              <span className="text-red-500 text-sm">
                {errors.mileage.message}
              </span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="color">Color</Label>
            </div>
            <input
              id="color"
              type="text"
              placeholder="Car Color"
              required
              {...register("color")}
              className="border p-2 rounded-lg w-full"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="fuel_type">Fuel Type</Label>
            </div>
            <input
              id="fuel_type"
              type="text"
              placeholder="Car Fuel Type"
              required
              {...register("fuel_type")}
              className="border p-2 rounded-lg w-full"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="transmission">Transmission</Label>
            </div>
            <input
              id="transmission"
              type="text"
              placeholder="Car Transmission"
              required
              {...register("transmission")}
              className="border p-2 rounded-lg w-full"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description">Description</Label>
            </div>
            <input
              id="description"
              type="text"
              placeholder="Car Description"
              required
              {...register("description")}
              className="border p-2 rounded-lg w-full"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="image">Image</Label>
            </div>
            <input
              id="image"
              type="text"
              placeholder="Car Image URL"
              required
              {...register("image")}
              className="border p-2 rounded-lg w-full"
            />
          </div>
          <Button type="submit" className="w-full">
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
          {error && (
            <div className="text-red-500 text-sm mt-2">
              Error: {error.message || "Something went wrong"}
            </div>
          )}
        </form>
      </div>
    </>
  );
}
