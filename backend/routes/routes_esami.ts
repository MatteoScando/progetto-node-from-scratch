import Router from "@koa/router";
import { inserisciEsame } from "../services/service_esame";
import { Esame } from "../../api-types/esame";

const router = new Router({
    prefix: "/esami"
});

router.post("/", async (ctx) => {
    ctx.accepts("json");
    console.log(ctx.request.body)
    const response = await inserisciEsame(ctx.request.body as Esame);
    ctx.response.body = response;
});

export default router;