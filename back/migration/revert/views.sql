-- Revert arkeos:views from pg

BEGIN;

DROP VIEW "view_article", "marketplace_view", "user_view", "chat_view";

COMMIT;
