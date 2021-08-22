const url = `http://localhost:3000/data`;

async function getHeroData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return [{ name: data.english.name, profession: data.english.profession }];
  } catch (error) {
    console.error(error);
  }
}

async function getSkillCardData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.english.skills;
  } catch (error) {
    console.error(error);
  }
}

export default { getHeroData, getSkillCardData };
