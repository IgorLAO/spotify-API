import config from "./connection.js";

export async function List() {
    let sql = `
        SELECT  NM_MUSIC    AS MUSIC,
                NM_ARTIST   AS ARTIST
        FROM MUSICS_TB      MUSICS
        INNER JOIN ARTISTS_TB   ARTISTS ON MUSICS.ID_ARTIST = ARTISTS.ID_ARTIST`;

    let [resp] = await config.query(sql);
    return resp;
};


export async function ListArtists() {
    let sql = `
    SELECT * FROM ARTISTS_TB`;

    let [resp] = await config.query(sql);
    return resp
};

export async function ListMusics() {
    let sql = `
    SELECT * FROM MUSICS_TB`

    let [resp] = await config.query(sql);

    return resp;
};

export async function Insert(M) {
    let sql = `
        INSERT INTO MUSICS_TB(ID_ARTIST, NM_MUSIC, IMG_COVER)
                    VALUES(?, ?, ?)`;

    let sql2 = ` INSERT INTO ARTISTS_TB (NM_ARTIST)
                             VALUES(?)`

    let [resp] = await config.query(sql, sql2 [M.nameArtists, M.id, M.nameMUsic, M.cover]);

    return resp[0];
};