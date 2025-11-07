искать дату oracle
```sql
where to_date(dat_synx,'dd.mm.rrrr') = '28.03.2025'

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

bulk collect example
```sql
DECLARE
  TYPE t_rowids IS TABLE OF ROWID INDEX BY PLS_INTEGER;
  TYPE t_row_numbers IS TABLE OF NUMBER INDEX BY PLS_INTEGER;

  l_rowids t_rowids;
  l_row_numbers t_row_numbers;
  
  CURSOR c_id_pok IS
    SELECT ROW_NUMBER() OVER (ORDER BY dat_synx) AS row_number,
           ROWID AS row_id
    FROM wk_t$abon_pok;

  l_limit CONSTANT PLS_INTEGER := 10000; -- Fetch 10 records at a time
  
BEGIN
  OPEN c_id_pok;

  LOOP
    FETCH c_id_pok BULK COLLECT INTO l_row_numbers, l_rowids LIMIT l_limit;
    
    EXIT WHEN l_rowids.COUNT = 0; -- Exit when no more records are fetched

    
    FORALL i IN 1 .. l_rowids.COUNT 
        UPDATE wk_t$abon_pok wap  -- Updating 10000 records at 1 go.
        SET wap.id_pok = SS_ID_POK.NEXTVAL
        WHERE ROWID = l_rowids(i);

    COMMIT;
    -- Clear collections for the next fetch
    l_rowids.DELETE;
    l_row_numbers.DELETE;
  END LOOP;

  CLOSE c_id_pok;
  
  DBMS_OUTPUT.PUT_LINE('Processing completed.');
END;

commit;
```

bulk collect 2
```sql
declare

    cursor c_old is
    select rowid as rid
    from wk_t$plan_kontr
    where dat_plan < trunc(sysdate) - 30;

    type t_rowid is table of rowid;
    v_rids t_rowid;

    v_limit constant pls_integer := 10000;
    v_total_deleted NUMBER := 0;

begin
    open c_old;

    loop
        fetch c_old bulk collect into v_rids limit v_limit;
        exit when v_rids.count = 0;
        
        forall i in 1 .. v_rids.count
            delete from wk_t$plan_kontr where rowid = v_rids(i);
            
        v_total_deleted := v_total_deleted + sql%rowcount;
        commit;
    end loop;
    close c_old;
    
    DBMS_OUTPUT.PUT_LINE('Total deleted rows: ' || v_total_deleted);

 end;
 /
```

для архивации записей в mariadb:
```sql
INSERT INTO tab_abon_pok_arhiv SELECT * FROM tab_abon_pok WHERE DAT_SYNX < '2024-09-01' ORDER BY DAT_SYNX;
```
```sql
DELETE FROM tab_abon_pok WHERE DAT_SYNX < '2024-09-01' ORDER BY DAT_SYNX;
```

sqlite
```sql

select _id, ulica, kod_ulica, dom, korpus, tek_pok, dat_pl from tab_abon where KOD_UCH =002 and KOD_ULICA =? and ORG =995 group by ULICA, KOD_ULICA, DOM, KORPUS order by ULICA, CAST(DOM as INTEGER), KORPUS

```

добавить настройки для МК
```sql
insert into `tab_settings` (mk_setting_id, setting_selector, setting_name, ORG) VALUES ('default_spinner_photo_position', 0, 'источник по умолчанию', '021');
```

апдейт таблицы по сложной выборке
```sql
declare
cursor c_a is
SELECT L_SH,
DAT_POK,
DAT_SYNX,
tek_pok
FROM (select aa.L_SH,
    aa.DAT_POK,
    bb.DAT_PRIN DAT_SYNX,
    aa.tek_pok
    from wk_t$abon_pok aa
    JOIN A_SEM_POK bb
  ON (aa.l_sh = bb.l_sh
 AND aa.tek_pok = bb.pok2
  and trunc(aa.dat_pok) = bb.dat_pok
 and trunc(aa.dat_synx) = bb.dat_prin)
 and pr_obnov='1');
begin
    for i in c_a loop
       update wk_t$abon_pok
          set pr_obnov='0'
      where trunc(dat_synx)>=i.dat_synx
               and dat_pok>=i.dat_pok 
               AND L_SH=i.l_sh
               and tek_pok=i.tek_pok;
    end loop;
end;
```
другой по той же теме:
```sql
declare
cursor c1 is
SELECT L_SH,
ADRES,
ABON_FIO,
zav_nom,
DAT_POK,
DAT_SYNX
FROM (select aa.L_SH,
    aa.ADRES,
    aa.abon_FIO,
    aa.ZAV_NOM,
    aa.DAT_POK,
    bb.DAT_PRIN DAT_SYNX
    from wk_v$abon_pok_s aa
    JOIN A_SEM_POK bb
  ON (aa.l_sh = bb.l_sh
 AND aa.zav_nom = bb.zav_nom
 AND aa.adres = bb.adres
 and aa.abon_fio = bb.fio
 and aa.dat_pok = bb.dat_pok
 and aa.dat_synx = bb.dat_prin));
 begin 
 end;
```

```sql
SELECT 
    org,
    ORG_NAIM,
    androidVersion,
    COUNT(*) AS `всего устройств по версии андроид`,
        ROUND(
        COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (PARTITION BY org),
        2
    ) AS `процент устройств`
FROM `mk_versions_by_orgs_and_uchs`
GROUP BY org, androidVersion
ORDER BY org, `всего устройств по версии андроид` DESC;

SELECT kod_uch as `Код участка`, org, ORG_NAIM as `Организация`, androidVersion as `Версия Андроид`, app_ver_name as `Версия МК` FROM `mk_versions_by_orgs_and_uchs` GROUP BY org, kod_uch, app_ver_name ORDER BY org, kod_uch DESC
```