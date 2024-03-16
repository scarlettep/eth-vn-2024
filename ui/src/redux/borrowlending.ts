import { getQuadraticLendingCompound } from "@/abi/borrowLendingCompound";
import { getProvider, sendTransaction } from "@/libs/providers";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BigNumber } from "ethers";

export interface BorrowLendingState {
  contractAddress: string;
  loading: boolean;
  errorMessage: string;
}

const initialState: BorrowLendingState = {
  contractAddress: "",
  loading: false,
  errorMessage: "",
};

export const borrowLending = createSlice({
  name: "borrowLending",
  initialState,
  reducers: {
    updateContractAddress: (state, action: PayloadAction<string>) => {
      state.contractAddress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLend.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLend.fulfilled, (state) => {
      state.loading = false;
      state.errorMessage = "";
    });
    builder.addCase(userLend.rejected, (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.errorMessage = action.payload.error;
      } else {
        state.errorMessage = action.error.message;
      }
    });
  },
  selectors: {
    getContractAddress: (state: BorrowLendingState) => state.contractAddress,
    getLoading: (state: BorrowLendingState) => state.loading,
    getErrorMessage: (state: BorrowLendingState) => state.errorMessage,
  },
});

export const userLend = createAsyncThunk<
  {},
  { lpTokenAddress: string; amount: number },
  {
    state: { borrowLending: BorrowLendingState };
    rejectValue: { error: string };
  }
>(
  "borrow/userLend",
  async ({ lpTokenAddress, amount }, { getState, rejectWithValue }) => {
    if (!lpTokenAddress) {
      return rejectWithValue({ error: "No lpTokenAddress provided" });
    }

    const contractAddress = getState().borrowLending.contractAddress;
    if (!contractAddress) {
      return rejectWithValue({ error: "No contract address provided" });
    }

    const provider = getProvider();
    if (!provider) {
      return rejectWithValue({ error: "No provider" });
    }

    const lendingContract = getQuadraticLendingCompound(
      contractAddress,
      provider
    );
    console.log('lpTokenAddress', lpTokenAddress)
    const transaction = await lendingContract.populateTransaction.userLend(lpTokenAddress, BigNumber.from(amount));
    await sendTransaction(transaction);

    return {};
  }
);
