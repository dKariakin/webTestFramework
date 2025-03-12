import { Page, Route } from "@playwright/test";
import { StatusCodes } from "http-status-codes";

const loginApi = /(.*)\/api\/auth\/login/;

export async function mockLoginSuccess(page: Page) {
  await page.route(loginApi, async (route: Route) => {
    const body = `{"token": 123}`;

    await route.fulfill({ status: StatusCodes.OK, body });
  });
}

export async function mockLoginFailed(page: Page) {
  await page.route(loginApi, async (route: Route) => {
    await route.fulfill({ status: StatusCodes.UNAUTHORIZED });
  });
}