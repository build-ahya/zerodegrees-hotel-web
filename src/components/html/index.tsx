function HtmlWrapper({ data }: { data: string }) {
  return (
    <article className='prose lg:prose-md max-w-screen-2xl'>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </article>
  );
}

export default HtmlWrapper;
