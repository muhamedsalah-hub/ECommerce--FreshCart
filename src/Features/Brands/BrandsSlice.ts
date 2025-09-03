//React Redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//API Reaquest
import { GetAllBrands } from "../../cors/services/GetAllBrands";

//Interfaces
import { IBrandsState } from "../../cors/InterFaces/InterFaces";

export const BrandsApi = createAsyncThunk("BrandsApi", async () => {
  try {
    const response = await GetAllBrands();
    const brands: { _id: string; name: string; image: string }[] =
      response.data.data;

    const brandsFiltration = brands.map((brand) => {
      return {
        brandId: brand._id,
        brandName: brand.name,
        brandImage: brand.image,
      };
    });
    return brandsFiltration;
  } catch (error) {
    console.log(error);
    return [];
  }
});

const initialState: IBrandsState = {
  brands: [],
};

export const BrandsSlice = createSlice({
  name: "Brands",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(BrandsApi.fulfilled, (currentState, action) => {
      currentState.brands = action.payload;
    });
  },
});

export default BrandsSlice.reducer;
