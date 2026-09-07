export async function getTeam(userId: string) {
  const response = await fetch(
    `https://lnh1dhp1mj.execute-api.us-east-1.amazonaws.com/api-pokemon/pokemon/v1/team?user-id=${userId}`
  );

  const data = await response.json();
  
  return data;
}