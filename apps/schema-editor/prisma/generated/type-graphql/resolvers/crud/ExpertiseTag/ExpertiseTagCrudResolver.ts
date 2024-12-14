import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateExpertiseTagArgs } from "./args/AggregateExpertiseTagArgs";
import { CreateManyAndReturnExpertiseTagArgs } from "./args/CreateManyAndReturnExpertiseTagArgs";
import { CreateManyExpertiseTagArgs } from "./args/CreateManyExpertiseTagArgs";
import { CreateOneExpertiseTagArgs } from "./args/CreateOneExpertiseTagArgs";
import { DeleteManyExpertiseTagArgs } from "./args/DeleteManyExpertiseTagArgs";
import { DeleteOneExpertiseTagArgs } from "./args/DeleteOneExpertiseTagArgs";
import { FindFirstExpertiseTagArgs } from "./args/FindFirstExpertiseTagArgs";
import { FindFirstExpertiseTagOrThrowArgs } from "./args/FindFirstExpertiseTagOrThrowArgs";
import { FindManyExpertiseTagArgs } from "./args/FindManyExpertiseTagArgs";
import { FindUniqueExpertiseTagArgs } from "./args/FindUniqueExpertiseTagArgs";
import { FindUniqueExpertiseTagOrThrowArgs } from "./args/FindUniqueExpertiseTagOrThrowArgs";
import { GroupByExpertiseTagArgs } from "./args/GroupByExpertiseTagArgs";
import { UpdateManyExpertiseTagArgs } from "./args/UpdateManyExpertiseTagArgs";
import { UpdateOneExpertiseTagArgs } from "./args/UpdateOneExpertiseTagArgs";
import { UpsertOneExpertiseTagArgs } from "./args/UpsertOneExpertiseTagArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ExpertiseTag } from "../../../models/ExpertiseTag";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateExpertiseTag } from "../../outputs/AggregateExpertiseTag";
import { CreateManyAndReturnExpertiseTag } from "../../outputs/CreateManyAndReturnExpertiseTag";
import { ExpertiseTagGroupBy } from "../../outputs/ExpertiseTagGroupBy";

@TypeGraphQL.Resolver(_of => ExpertiseTag)
export class ExpertiseTagCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateExpertiseTag, {
    nullable: false
  })
  async aggregateExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExpertiseTagArgs): Promise<AggregateExpertiseTag> {
    return getPrismaFromContext(ctx).expertiseTag.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyExpertiseTagArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnExpertiseTag], {
    nullable: false
  })
  async createManyAndReturnExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnExpertiseTagArgs): Promise<CreateManyAndReturnExpertiseTag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExpertiseTag, {
    nullable: false
  })
  async createOneExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneExpertiseTagArgs): Promise<ExpertiseTag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyExpertiseTagArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExpertiseTag, {
    nullable: true
  })
  async deleteOneExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneExpertiseTagArgs): Promise<ExpertiseTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExpertiseTag, {
    nullable: true
  })
  async findFirstExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstExpertiseTagArgs): Promise<ExpertiseTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExpertiseTag, {
    nullable: true
  })
  async findFirstExpertiseTagOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstExpertiseTagOrThrowArgs): Promise<ExpertiseTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ExpertiseTag], {
    nullable: false
  })
  async expertiseTags(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyExpertiseTagArgs): Promise<ExpertiseTag[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExpertiseTag, {
    nullable: true
  })
  async expertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExpertiseTagArgs): Promise<ExpertiseTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => ExpertiseTag, {
    nullable: true
  })
  async getExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueExpertiseTagOrThrowArgs): Promise<ExpertiseTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [ExpertiseTagGroupBy], {
    nullable: false
  })
  async groupByExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByExpertiseTagArgs): Promise<ExpertiseTagGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyExpertiseTagArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExpertiseTag, {
    nullable: true
  })
  async updateOneExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneExpertiseTagArgs): Promise<ExpertiseTag | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => ExpertiseTag, {
    nullable: false
  })
  async upsertOneExpertiseTag(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneExpertiseTagArgs): Promise<ExpertiseTag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expertiseTag.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
