import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Listado de canciones
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

//Find song for id
export const findSongById = async (req, res) => {
  try {
    const id = req.params.id
    const music = await prisma.music.findUnique({
      where: { id: Number(id)},
      select: {
        id:true,
        name: true,
        artist: true,
        album: true,
        year: true,
        genere: true,
        duration: true,
      }
    })

    res.json({
      ok: true,
      data: music,
    });
  } catch (error) {
    res.json({
      ok:false,
      data:error.message,
    })
  }
}

// Create song
export const createSong = async (req, res) => {
  try {
    const { body } = req;
    const music = await prisma.music.create({
      data: {
        ...body,
      },
    });
    res.json({
      ok: true,
      data: music,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};
