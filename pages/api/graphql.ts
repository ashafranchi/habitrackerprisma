import { graphql} from "graphql";
import { objectType, makeSchema} from "@nexus/schema";
import path from "path";

const Song = objectType({
    name: "Song",
    definition(t) {
        t.id("id");
        t.string("artist");
        t.string("songName");
        t.string("yearReleased");
    },
});

const schema = makeSchema({
    types:[Song],
    outputs: {
        typegen: path.join(__dirname, "next-typegen.ts"),
        schema: path.join(__dirname, "schema.graphql")
    },
})

export default async (req, res) => {
    const query = req.body.query;
    const variables = req.body.variables;
    const response = await graphql(schema, query, {}, {}, variables);
    return res.end(JSON.stringify(response));
};