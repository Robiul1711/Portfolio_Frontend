"use server";

export const getProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
      method: "GET",
    });
    const result = await res.json();
    return result;
  } catch (error) {
    return error;
  }
};
