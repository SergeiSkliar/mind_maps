искать дату oracle
```sql
where to_date(dat_dml,'dd.mm.rrrr') = '24.04.2023'

select * from wk_v$abon_pok where dat_synx > to_date('19/07/2023 09:00:00', 'DD/MM/YYYY HH24:MI:SS')
```
искать дату mysql
```sql
dat_synx > '2023-11-26 21:30:00'
--or
where date(dat_synx) = '2023-07-22'
```
подсчёт числа синхронизаций
```sql
SELECT org, kod_uch, COUNT(kod_uch) FROM `dat_synx_log` where date(dat_synx) = '2023-07-22' and org = 010 GROUP BY kod_uch ORDER BY `COUNT(kod_uch)` DESC;

SELECT org, kod_uch, COUNT(kod_uch) 'количество синхр-ий' FROM `dat_synx_log` where date(dat_synx) = '2023-07-27' and org = 010 GROUP BY kod_uch ORDER BY `количество синхр-ий` DESC
```

```sql
SELECT * FROM `tab_abon_img` where DAT_SYNX < date_add(curdate(),interval -DAY(curdate())+1 DAY) and PR_OBNOV = 0

select * from wk_t$abon_pok where to_date(dat_synx,'dd.mm.rrrr HH24:MI:SS') > to_date('18.09.2023 09:30:00','dd.mm.rrrr HH24:MI:SS') and 
to_date(dat_synx,'dd.mm.rrrr HH24:MI:SS') < to_date('20.09.2023 09:16:00','dd.mm.rrrr HH24:MI:SS')
and to_date(dat_pl,'dd.mm.rrrr') != to_date('19.09.2023','dd.mm.rrrr') --and l_sh in (162068, 151878, 39477)
```

вставка wk_g$dat
```sql
  insert into WK_G$DAT (dat_n, DAT_K, dat_n1, dat_t) 
  values (add_months(last_day(trunc(sysdate))+1,-1), last_day(trunc(sysdate))+1, add_months(add_months(last_day(trunc(sysdate))+1,-1),-1), trunc(sysdate));
```
скрипт сессии
```sql
select sid,username,terminal,status,program,logon_time,sql_exec_start,prev_exec_start,last_call_et/60,event,blocking_session from v$session
where Status in ('ACTIVE','KILLED')  and username is not null --and username='SYS'
order by last_call_et desc;
```

join в mysql (доработать)
```sql
SELECT * FROM `tab_abon_pok` tap 
join tab_abon ta on tap.LSH = ta.lsh and tap.KOD_UCH = ta.KOD_UCH and tap.org = ta.org
where tap.KOD_UCH = 052 and tap.org = 010 and tap.DAT_SYNX > '2023-08-21' 
ORDER BY tap.`DAT_SYNX` DESC;
```

обновление pr_obnov
```sql
UPDATE `tab_abon` 
SET PR_OBNOV=0
WHERE KOD_UCH=007 AND ORG=010 and dat_pl='2022-11-30'



UPDATE `tab_abon_img` 
SET PR_OBNOv=0
WHERE pr_obnov=2 AND ORG=012
limit 275;


insert into tab_abon_img (lsh, KOD_PU, ZAV_NOM, img, KOD_uch, DAT_SYNX, PR_OBNOV, org)
select lsh, KOD_PU, ZAV_NOM, img, KOD_uch, DAT_SYNX, PR_OBNOV,org from tab_abon_img_test;
```

