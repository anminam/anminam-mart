# Anminam-mart

# tailwindcss

> A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

- https://tailwindcss.com/

```
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- 확장

```
Tailwind CSS IntelliSense
```

# icon

- https://heroicons.com/

# Prisma

- https://www.prisma.io/
- Prisma extension 설치

```
npm i prisma -D
npx prisma init
```

# PlanetScale

- https://planetscale.com/

```
https://scoop.sh/
```

- install

```
scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git
scoop install pscale mysql

```

- update

```
scoop update pscale
```

```
pscale region list
```

```
 pscale database create anminam-mart --region ap-northeast
```

- DB 연결

```
pscale connect anminam-mart
```

- 외부키 정합성 '프리즈마' 한테 잡아달라고하기

```
  previewFeatures = ["referentialIntegrity"]

```

```
npx prisma db push
```

- 현재 연결된 프리즈마 보기. 와우 와우 와우

```
npx prisma studio
```

```
npm i @prisma/client
// 백엔드에서 직접 client를 사용하기때문에 -D 가 안붙는다.

```

# React Hook Form

- https://react-hook-form.com/
