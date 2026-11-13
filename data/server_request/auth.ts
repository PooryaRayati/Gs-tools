import axios from "axios"


const submitLoginApi = async (FormBody: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/request-otp/`,
      JSON.stringify(FormBody),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'An error occurred');
    } else {
      throw new Error('An error occurred');
    }
  }
};

const submitLoginOtpVerifyApi = async (FormBody: any) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify-otp/`,
      JSON.stringify(FormBody),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'An error occurred');
    } else {
      throw new Error('An error occurred');
    }
  }
};

const submitSignUpApi = async (FormBody: any) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/create_user/`,
            JSON.stringify(FormBody),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
        return response
    } catch (error: any) {
        return error.status;
    }
}

export {
    submitLoginApi,
    submitSignUpApi,
    submitLoginOtpVerifyApi,
}