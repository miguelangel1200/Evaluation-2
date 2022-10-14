import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findAllSongs = async (req, res) => {
  try {
    const musics = await prisma.music.findMany();
    res.json({
      ok: true,
      data: musics,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { body } = req;
    const user = await prisma.user.create({
      data: {
        ...body,
      },
    });
    res.json({
      ok: true,
      data: user,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};
