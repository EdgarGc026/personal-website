// const url = `http://localhost:3000/data`;
const url = `https://my-json-server.typicode.com/edgargc026/demo/data`;

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

async function getAboutMeData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.english.aboutMe;
  } catch (error) {
    console.error(error);
  }
}

async function getFrontendData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.english.frontend;
  } catch (error) {
    console.error(error);
  }
}

async function getFooterData() {
  try {
    const responase = await fetch(url);
    const data = await responase.json();

    return data.english.social;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getHeroData,
  getSkillCardData,
  getAboutMeData,
  getFrontendData,
  getFooterData,
};
